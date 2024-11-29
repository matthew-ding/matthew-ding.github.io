---
title: "Fast and Robust State Estimation and Tracking via Hierarchical Learning"
collection: publications
permalink: /publication/hierarchical
venue: "IEEE Transactions on Automatic Control (TAC)"
slidesurl: #
paperurl: 'https://arxiv.org/abs/2306.17267'
citation: "Connor Mclaughlin, Matthew Ding, Denis Erdogmus, and Lili Su. IEEE Transactions on Automatic Control (TAC), accepted with minor revision."
---

Fully distributed estimation and tracking solutions to large-scale multi-agent networks suffer slow convergence and are vulnerable to network failures. In this paper, we aim to speed up the convergence and enhance the resilience of state estimation and tracking using a simple hierarchical system architecture wherein agents are clusters into smaller networks, and a parameter server exists to aid the information exchanges among networks. The information exchange among networks is expensive and occurs only once in a while.
We propose two consensus + innovation algorithms for the state estimation and tracking problems, respectively. In both algorithms, we use a novel hierarchical push-sum consensus component. For the state estimation, we use dual averaging as the local innovation component. State tracking is much harder to tackle in the presence of dropping-link failures and the standard integration of the consensus and innovation approaches are no longer applicable. Moreover, dual averaging is no longer feasible. Our algorithm introduces a pair of additional variables per link and ensure the relevant local variables evolve according to the state dynamics, and use projected local gradient descent as the local innovation component. We also characterize the convergence rates of both of the algorithms under linear local observation model and minimal technical assumptions. We numerically validate our algorithm through simulation of both state estimation and tracking problems.