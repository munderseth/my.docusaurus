---
sidebar_label: "My Doc"
sidebar_position: 3
---

# Stuff

- [link](https://testspace.com)
- One
- Two
- quotes - `hey we are`

## Block Code

```sh title=hey
$ testspace
```


Users often use batches to make it easier:

```yaml {5-7} title="qa/batches.yaml"
my-batch:
  inputs:
  - A.jpg
  configs:
  - base
  - delta

# $ qa batch my-batch
# => qa --config base:delta run A.jpg
# => qa --config base:delta run B.jpg
```

## Admonition

:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::