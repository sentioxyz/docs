---
title: Profile Processor Performance
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
## What's a CPU profile?

A CPU profile is a report that shows how the CPU was used over a period of time. It can show which programs were using the most CPU time, which processes were running, and how much time was spent in each state. With CPU profiles, you can identify performance bottlenecks and optimize CPU resource utilization.

## Precondition

* Processor SDK version should be 2.38.0 or later version.
  > SDK version could be viewed under "Project -> Datasource -> Version Details" page: 
  <figure>
    <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FnokhZqxlSBFz23VOY47Q%2Fuploads%2FLpxmP2XluzO2GNm9CQG4%2Fimage.png?alt=media&token=bdf8c73c-d9d7-4098-92c5-a9db55ee6c6a" alt="" />
    <figcaption>
      <p>View SDK version</p>
    </figcaption>
  </figure>

* Project's processor should be **Sentio Processor**, currently the Subgraph processor does not support profiling.

## Start profiling via Processor page

1. Open "**Datasource** -> **System Monitor**", then click "**Profile**" button to open profile dialog.
   <figure>
     <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FnokhZqxlSBFz23VOY47Q%2Fuploads%2FJPMcVST6Ys0VO5y7TeRR%2Fimage.png?alt=media&token=48c8460d-ef97-4fd1-b710-1c8360fe75ba" alt="" />
     <figcaption>
       <p>Open profiling dialog</p>
     </figcaption>
   </figure>
2. Select the profile recording duration and click "**Start Recording**". Wait for the profiling to complete, then you can download the profile output files.
   <figure>
     <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FnokhZqxlSBFz23VOY47Q%2Fuploads%2FDuaiumqc6Qwd7Msoov2E%2Fimage.png?alt=media&token=511b2ade-91c6-4681-b5b2-cf2edba79797" alt="" />
     <figcaption>
       <p>Start Recording</p>
     </figcaption>
   </figure>

## Analyze profiling results

To analyze the profiling results, use any flame graph tool. A convenient option is Chrome DevTools.

Open Chrome DevTools, go to the Performance panel, and import the profile files.

<figure>
  <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FnokhZqxlSBFz23VOY47Q%2Fuploads%2FLzLC7Rc5IURpFVqjp93L%2Fimage.png?alt=media&token=8ba40570-1d44-4c71-8dc6-46d70176bda7" alt="" />
  <figcaption>
    <p>Chrome DevTool Guide</p>
  </figcaption>
</figure>

Once the profile is loaded, you can use the "**Bottom-Up**" view to analyze performance. 

1. **Select "Bottom-Up" View**: In the bottom panel, click on the "Bottom-Up" panel.
2. **Examine Function Times**: This view lists functions sorted by their total time. The total time is the sum of all time spent in the function itself and in all its child functions.
3. **Identify Hotspots**: Look for functions with high total times, which indicates they are significant performance bottlenecks. These functions might not appear at the top of the call stack but still consume a lot of resources.
4. **Focus on Critical Functions**: Click on a function to see a breakdown of where and how often it is called. This helps you understand its impact on overall performance.
5. **Optimize**: Based on the insights gained from the "Bottom-Up" view, identify functions that take the most time and focus on optimizing them to improve overall performance.

> For a tutorial on Chrome DevTools, refer to [this post](https://developer.chrome.com/docs/devtools/performance/reference#analyze) to learn more.