// TEST_COMMITS: 20260127093314 (#1)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('App1 Changes successfully roled out with GitHub Actions + ArgoCD | End-to-End GitOps CI/CD Pipeline on Kubernetes');
});

app.listen(port, () => {
  console.log(`App1 running on http://localhost:${port}`);
});

