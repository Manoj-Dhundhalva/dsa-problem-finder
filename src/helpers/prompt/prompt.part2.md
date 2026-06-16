
```

---

### Step 2 — Evaluate Each Problem

For every problem, apply the **DSA Problem Evaluator Prompt** strictly. A problem is selected **only if** it receives `VERDICT: VALID ✅`.

---

### Step 3 — Output Selected Problems

For each problem that passes, output:

```

## [Title] — Rating: XXXX

Contest : [Contest Name]
Tags : [tag1, tag2, ...]
Link : https://codeforces.com/contest/[contestId]/problem/[problemIndex]
Topics : [DSA Topic(s) from evaluator]
Summary : [2–3 line summary from evaluator]

```

At the end, print:

```

Total Fetched : X
Selected : Y
Rejected : Z

```

---
```
