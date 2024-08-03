---
title: "Near-Optimal Effective Resistance and For-Each Sparsification in a Stream"
collection: publications
permalink: /publication/minimum-cut-stream
#excerpt: "Modern chained Byzantine Fault Tolerant (BFT) systems leverage a combination of pipelining and leader rotation to obtain both efficiency and fairness. These protocols, however, require a sequence of three or four consecutive honest leaders to commit operations. Therefore, even simple leader failures such as crashes can weaken liveness, resulting in high commit latency or lack of commit all together. We show that, unfortunately, this vulnerability is inherent to all existing BFT protocols that rotate leaders with pipelined agreement. To resolve this liveness shortcoming we present BeeGees1, a novel chained BFT protocol that successfully commits blocks even with non-consecutive honest leaders. It does this while also maintaining quadratic word complexity with threshold signatures, linear word complexity with SNARKs, and responsiveness between consecutive honest leaders. BeeGees reduces the expected commit latency of HotStuff by a factor of three under failures, and the worst-case latency by a factor of seven."
date: 2024-12-01
venue: "(Under Submission)"
slidesurl: # 'http://academicpages.github.io/files/slides1.pdf'
paperurl: # 'https://dl.acm.org/doi/10.1145/3583668.3594572'
citation: "Matthew Ding, Alexandro Garces, Jason Li, Honghao Lin, Jelani Nelson, Vihan Shah, and David P. Woodruff. Submitted."
---