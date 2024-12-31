---
title: 💨 Entities
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
By using entity store, you now have the capability to organize your data based on a predefined schema. This structured data can be accessed during the processor's execution and can also be retrieved using our SQL and GraphQL API.

*Beginning with version 2.39.6, we have implemented the use of decorators to minimize codegen sizes. Please ensure that your ts.config file has the following configurations enabled.*

```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

## Schema

The schema can be established utilizing the GraphQL schema definition language. This schema is specified in the store.graphql file located at the root of the processor directory. The following is an example of a schema definition:

```graphql
 type Transfer @entity {
    id: ID!
    from: User!
    to: User!
    amount: BigDecimal!
}

type User @entity {
    id: ID!
    name: String!
}

```

The structure of the schema is made up of entities, interfaces, and enums.

### Define Entities

An entity is a type that represents a data structure. The entity is defined using the `@entity` directive. The entity can have fields that are scalar types or other entities. The entity must have an `id` field of type `ID!`.

#### IDs

Every entity is required to define a field named id with the type of ID!. This id field serves as the primary key and ensures uniqueness across all entities of the same type.

#### Scalar Types

The scalar types are the basic building blocks of the schema. The scalar types includes:

* Int
* Float
* String
* Boolean
* ID
* BigInt
* BigDecimal

#### Relationships

Entities can have relationships with other entities. The relationships can be one-to-one, one-to-many, or many-to-many.

##### One-to-One relationship

In instances where a single entity is linked to another single entity, it's typically referred to as a one-to-one relationship.

For instance, a user is associated with a single corresponding profile, and each profile is linked to one specific user.

```graphql
type Profile @entity {
    id: ID!
    user: User!
}

type User @entity {
    id: ID!
    profile: Profile
}
```

##### One-to-Many relationship

To establish a one-to-many relationship in an entity, you should use square brackets around the field type. This indicates that the field can hold multiple instances of the related entity.

For instance, a company can have multiple employees, but each employee is associated with only one company.

```graphql
type Company @entity {
    id: ID!
    name: String!
}
type Employee @entity {
    id: ID!
    name: String!
    company: Company!
}
```

###### Reverse lookup by derivedFrom

The `@derivedFrom` directive is used to specify the field in the related entity that the relationship is derived from.

```graphql
type Company @entity {
    id: ID!
    name: String!
    employees: [Employee!] @derivedFrom(field: "company")
}
type Employee @entity {
    id: ID!
    name: String!
    company: Company!
}
```

##### Many-to-Many relationship

To define a many-to-many relationship, you should use square brackets around the field type in both entities.

For instance, a student can enroll in multiple courses, and each course can have multiple students.

```graphql
type Student @entity {
    id: ID!
    name: String!
    courses: [Course!]! @derivedFrom(field: "students")
}
type Course @entity {
    id: ID!
    name: String!
    students: [Student!]!
}
```

### Interfaces

Interfaces are a type of structure in GraphQL that can be used by entities. They are created using the interface keyword and can contain fields of scalar types or other entities. Entities can implement these interfaces using the implements keyword. They are beneficial for defining fields that are common across multiple entities.

```graphql
type Project @entity {
    id: ID!
    name: String!
    owner: ProjectOwner!
}
interface ProjectOwner {
    id: ID!
    name: String!
}

type User implements ProjectOwner @entity {
    id: ID!
    name: String!
}

type Organization implements ProjectOwner @entity {
    id: ID!
    name: String!
}


```

### Enums

Enums are a type of structure in GraphQL that can be used to define a set of constants. They are created using the enum keyword and can contain a list of values. Enums are useful for defining fields that have a fixed set of values.

```graphql
enum Role {
    ADMIN
    USER
}
type User @entity {
    id: ID!
    name: String!
    role: Role!
}
```

## Accessing Data in Processor

After defining the schema, you can use `sentio build` to generate the TypeScript types for the schema. The generated files is located in the `src/schema` directory. The following is an example of the generated types:

```typescript
type UserData = Omit<User, "rewards"> & {rewards?: Array<ID|Reward>}

@entity("User")
export class User extends Entity {
    constructor(data: Partial<UserData>) {
        super(data)
    }
    get id(): ID { return this.get("id") }
    set id(value: ID) { this.set("id", value) }
    get name(): String { return this.get("name") }
    set name(value: String) { this.set("name", value) }
}
```

The generated types can be used to access the data in the processor. use `ctx.store` to interact with the data store.

### Insert or Update Data

To insert or update data in the store, you can use the `ctx.store.upsert` method. The following is an example of inserting a new user:

```typescript
import { User } from './schema/schema.js'
ERC20Processor.onEventTransfer(
    async (event, ctx) => {
        const from = new User({
            id: event.args.from
        })

        await ctx.store.upsert(from)
        const to = new User({
            id: event.args.to
        })
        await ctx.store.upsert(to)
    }
)
```

### Get entity by ID

To retrieve an entity by its ID, you can use the `ctx.store.get` method. The following is an example of retrieving a user by its ID:

```typescript
import { User } from './schema/schema.js'
ERC20Processor.onEventTransfer(
    async (event, ctx) => {
        const from = await ctx.store.get(User, event.args.from)
        const to = await ctx.store.get(User, event.args.to)
    }
)
```

### Delete entity

To delete an entity, you can use the `ctx.store.delete` method. The following is an example of deleting a user:

```typescript
import { User } from './schema/schema.js'

const id = event.args.from
await ctx.store.delete(User, id)

```

### Query entities

In your store, there are two methods to query and filter entities: `list` and `listIterator`.

#### `store.list(Entity, filters)`

For simplicity, the `list` method returns entities based on the `Entity` and `filters` parameters.

The following is an example of querying all users with an amount greater than 0:

```typescript
import { User } from './schema/schema.js'
ERC20Processor.onEventTransfer(
    async (event, ctx) => {
        // Get all users with amount greater than 0
        const users = await ctx.store.list(User, [{field:"amount", op:">", value: 0}])
        for (const user of users) {
            console.log(user)
        }
    }
)
```

*Please be aware that the`list` method retrieves all entities, which might not be optimal and could potentially consume a lot of memory resources in your processor. For handling larger datasets, we recommend using the `listIterator` method.*

#### `store.listIterator(Entity, filters)`

The `listIterator` method returns an iterator that can be used to iterate over entities based on the `Entity` and `filters` parameters.\
You can use the `for await` grammar to iterate over the entities.

```
ERC20Processor.onEventTransfer(
    async (event, ctx) => {
        for await (const user of ctx.store.listIterator(User, [{field:"name", op:"=", value: "Alice"}])) {
            console.log(user)
        }
    }
)
```

Unlike the `list` method, the `listIterator` method does not load all entities into memory at once,\
you can handle entities one by one, or in batches, which is more memory-efficient.
The following is an example of handling entities in batches:

```typescript
ERC20Processor.onEventTransfer (
    async (event, ctx) => {
        const iterator = ctx.store.listIterator(User, [{field:"name", op:"=", value: "Alice"}])

        let batch: User[] = []
        let promises: Promise<any> = []
        for await (const users of iterator) {
            batch.push(users)
            if (batch.length >= 10) {
                promises.push(handleBatch([...batch]))
                batch = []
            }
            // you can use `break` to stop the iteration
            // if (promises.length > 100) break
        }
        // handle the last batch
        if (batch.length > 0) {
            promises.push(handleBatch([...batch]))
        }
        // wait for all promises to complete
        await Promise.all(promises)
    }
)
```

#### Filters

The `filters` parameter is an array of objects that specify the filter conditions. Each object has the following fields:

* `field`: The field name to filter on.

* `op`: The operator to use for the filter. The supported operators are:
  * `=`: Equal
  * `!=`: Not equal
  * `>`: Greater than
  * `>=`: Greater than or equal
  * `<`: Less than
  * `<=`: Less than or equal
  * `in`: In the list
  * `not in`: Not in the list

* `value`: The value or the array of values to filter on.

Multiple filters are combined using the logical AND operator.

The following is an example of querying all users like the `where amount > 0 AND name = 'Alice'` in SQL:

```typescript
ctx.store.listIterator(User, [
    {field:"amount", op:">", value: 0},
    {field:"name", op:"=", value: "Alice"}
])
```

## Query Data using SQL

You can query the data store using SQL.  Just like you do with event logs data. The entity will show up in table schema.\
![img.png](https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/entity-sql-screenshot.png)

## Query Data using GraphQL

You can query the data store using GraphQL. The query schema will be generated based on the schema definition.

![img.png](https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/entity-graqphql-screenshot.png)