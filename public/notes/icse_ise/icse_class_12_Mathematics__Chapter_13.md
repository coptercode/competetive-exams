# Chapter 13: Application of Calculus in Commerce

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Application of Calculus in Commerce

(Topics covered from uploaded ISC Class 12 Mathematics outline: applications of derivatives and integration in economics, marginal cost, marginal revenue, profit maximization, and business models) :contentReference[oaicite:0]{index=0}

---

# Introduction

Calculus is widely used in **commerce and economics** to analyze changing quantities.

It helps businesses determine:

- Maximum profit
- Minimum cost
- Revenue optimization
- Marginal changes
- Growth patterns

Important calculus concepts used:

- Differentiation
- Integration
- Maxima and minima

---

# 1. Basic Economic Functions

In commerce, different quantities are represented as functions of output.

Let:

```
x = number of units produced
```

---

# Cost Function

The total cost of producing x units is called the cost function.

Representation:

\[
C(x)
\]

It includes:

- Fixed cost
- Variable cost

---

# Revenue Function

The income obtained by selling x units is called revenue.

Representation:

\[
R(x)
\]

Formula:

\[
Revenue = Price \times Quantity
\]

---

# Profit Function

Profit is the difference between revenue and cost.

Formula:

\[
P(x)=R(x)-C(x)
\]

---

# 2. Marginal Cost (MC)

## Definition

Marginal cost is the additional cost of producing one extra unit.

It is the derivative of cost function.

---

Formula:

\[
MC=\frac{dC}{dx}
\]

---

# Example

Given:

\[
C(x)=x^2+5x+100
\]

Marginal cost:

\[
MC=\frac{dC}{dx}
\]

\[
MC=2x+5
\]

---

# 3. Marginal Revenue (MR)

## Definition

Marginal revenue is the additional revenue obtained by selling one extra unit.

---

Formula:

\[
MR=\frac{dR}{dx}
\]

---

# Example

Given:

\[
R(x)=50x-x^2
\]

Marginal revenue:

\[
MR=50-2x
\]

---

# 4. Marginal Profit

Profit function:

\[
P(x)=R(x)-C(x)
\]

Differentiating:

\[
\frac{dP}{dx}
=

\frac{dR}{dx}
-

\frac{dC}{dx}
\]

Therefore:

\[
MP=MR-MC
\]

---

# Important Result

Maximum profit occurs when:

\[
MR=MC
\]

---

# 5. Break-Even Point

## Definition

The point where total revenue equals total cost is called the break-even point.

---

Condition:

\[
R(x)=C(x)
\]

or:

\[
P(x)=0
\]

---

At break-even:

- No profit
- No loss

---

# Example

If:

\[
R(x)=100x
\]

and:

\[
C(x)=50x+500
\]

Break-even:

\[
100x=50x+500
\]

\[
50x=500
\]

\[
x=10
\]

---

# 6. Profit Maximization

## Definition

Finding the production level where profit is maximum.

---

# Steps

### Step 1

Find profit function:

\[
P(x)=R(x)-C(x)
\]

---

### Step 2

Differentiate:

\[
P'(x)=0
\]

---

### Step 3

Check second derivative:

\[
P''(x)<0
\]

For maximum profit.

---

# Example

Given:

\[
R(x)=100x-x^2
\]

\[
C(x)=20x+100
\]

Profit:

\[
P(x)=100x-x^2-20x-100
\]

\[
P(x)=80x-x^2-100
\]

Derivative:

\[
P'(x)=80-2x
\]

Put:

\[
80-2x=0
\]

\[
x=40
\]

Second derivative:

\[
P''(x)=-2
\]

Since:

\[
P''(x)<0
\]

Profit is maximum at:

\[
x=40
\]

---

# 7. Average Cost

## Definition

Average cost is the cost per unit of production.

---

Formula:

\[
AC=\frac{C(x)}{x}
\]

---

# Example

If:

\[
C(x)=1000+50x
\]

then:

\[
AC=
\frac{1000+50x}{x}
\]

---

# 8. Average Revenue

Average revenue is revenue per unit.

Formula:

\[
AR=\frac{R(x)}{x}
\]

---

# 9. Demand Function

## Definition

The relationship between price and quantity demanded.

Representation:

\[
p=f(x)
\]

where:

- p = price
- x = quantity demanded

---

# Revenue Using Demand Function

\[
R=xp
\]

---

Example:

If:

\[
p=100-2x
\]

then:

\[
R=x(100-2x)
\]

\[
R=100x-2x^2
\]

---

# 10. Elasticity of Demand

## Definition

Elasticity measures the responsiveness of demand to price changes.

---

Formula:

\[
E=
-\frac{p}{x}\frac{dx}{dp}
\]

---

# Types

## Elastic Demand

\[
E>1
\]

Demand changes greatly with price.

---

## Inelastic Demand

\[
E<1
\]

Demand changes slightly with price.

---

## Unit Elastic

\[
E=1
\]

---

# 11. Integration in Commerce

Integration is used to find total values from marginal values.

---

# Total Cost from Marginal Cost

If:

\[
MC=\frac{dC}{dx}
\]

then:

\[
C=\int MC\,dx
\]

---

# Total Revenue from Marginal Revenue

If:

\[
MR=\frac{dR}{dx}
\]

then:

\[
R=\int MR\,dx
\]

---

# Example

Given:

\[
MC=2x+5
\]

Find cost function.

Solution:

\[
C=\int(2x+5)dx
\]

\[
C=x^2+5x+k
\]

---

# 12. Optimization Applications

Calculus helps businesses optimize:

---

## Maximum Profit

Condition:

\[
MR=MC
\]

---

## Minimum Cost

Condition:

\[
C'(x)=0
\]

and:

\[
C''(x)>0
\]

---

## Maximum Revenue

Condition:

\[
R'(x)=0
\]

and:

\[
R''(x)<0
\]

---

# ASCII Flowchart

```
          CALCULUS IN COMMERCE
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Cost       Revenue      Profit
        │           │           │
        ▼           ▼           ▼
   Marginal C   Marginal R   Optimize
        │           │           │
        └───────────┼───────────┘
                    ▼
             Maximum/Minimum
```

---

# Important Formulae

| Concept          | Formula  |
| ---------------- | -------- |
| Cost Function    | C(x)     |
| Revenue Function | R(x)     |
| Profit Function  | P=R-C    |
| Marginal Cost    | MC=dC/dx |
| Marginal Revenue | MR=dR/dx |
| Marginal Profit  | MP=MR-MC |
| Average Cost     | AC=C/x   |
| Average Revenue  | AR=R/x   |
| Break Even       | R=C      |
| Maximum Profit   | MR=MC    |
| Total Cost       | C=∫MC dx |
| Total Revenue    | R=∫MR dx |

---

# Solved Examples

## Example 1

Find marginal cost:

\[
C=x^2+10x+50
\]

Solution:

\[
MC=\frac{dC}{dx}
\]

\[
MC=2x+10
\]

---

## Example 2

Find profit function:

\[
R=200x-2x^2
\]

\[
C=50x+100
\]

Solution:

\[
P=R-C
\]

\[
P=200x-2x^2-50x-100
\]

\[
P=150x-2x^2-100
\]

---

## Example 3

Find break-even point:

\[
R=100x
\]

\[
C=50x+200
\]

At break-even:

\[
100x=50x+200
\]

\[
x=4
\]

---

## Example 4

Find marginal revenue:

\[
R=500x-x^2
\]

Solution:

\[
MR=\frac{dR}{dx}
\]

\[
MR=500-2x
\]

---

## Example 5

Find maximum revenue:

\[
R=100x-x^2
\]

Derivative:

\[
R'=100-2x
\]

Put:

\[
100-2x=0
\]

\[
x=50
\]

Second derivative:

\[
R''=-2
\]

Therefore maximum revenue occurs at:

\[
x=50
\]

---

# Common Mistakes

- Confusing revenue and profit functions.
- Forgetting:

\[
P=R-C
\]

- Using MC instead of total cost.
- Forgetting second derivative test.
- Incorrect differentiation.
- Ignoring business constraints.

---

# Exam Tips

- Memorize economic formulas.
- Practice profit maximization problems.
- Understand relation:

\[
MR=MC
\]

- Practice break-even questions.
- Learn how integration converts marginal values into total values.
- Always verify maximum/minimum conditions.

---

# Quick Revision

- Cost:

\[
C(x)
\]

- Revenue:

\[
R(x)
\]

- Profit:

\[
P=R-C
\]

- Marginal Cost:

\[
MC=C'(x)
\]

- Marginal Revenue:

\[
MR=R'(x)
\]

- Maximum Profit:

\[
MR=MC
\]

- Break-even:

\[
R=C
\]

---

# Chapter Summary

- **Calculus in Commerce** applies differentiation and integration to solve economic and business problems.
- Derivatives are used to calculate **marginal cost, marginal revenue, marginal profit, and optimization points**.
- Integration helps recover total cost and revenue from marginal values.
- Maximum profit occurs when **marginal revenue equals marginal cost**.
- These concepts are widely applied in **business decisions, economics, finance, production planning, and market analysis**.

# ISC Class 12 Mathematics

