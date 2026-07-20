# Chapter 12: Linear Programming

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Linear Programming

> **Note:** This chapter introduces Linear Programming Problems (LPPs), feasible regions, objective functions, optimization, graphical methods of solution, and applications in business, economics, and engineering.

---

# Introduction

**Linear Programming (LP)** is a mathematical technique used to determine the **best possible solution** (maximum or minimum) for a linear objective function, subject to a given set of linear constraints.

Linear Programming is widely used in:

- Business
- Economics
- Agriculture
- Manufacturing
- Transportation
- Production planning
- Resource allocation

The solutions help in maximizing profit or minimizing cost while satisfying all given restrictions.

---

# 1. Linear Programming Problem (LPP)

## Definition

A **Linear Programming Problem (LPP)** is a mathematical problem in which a **linear objective function** is optimized (maximized or minimized) subject to a set of **linear constraints**.

---

## Components of an LPP

Every LPP consists of:

- Decision variables
- Objective function
- Constraints
- Non-negativity restrictions

---

# 2. Decision Variables

## Definition

The unknown quantities whose values are to be determined are called **decision variables**.

Usually represented by

```

x

and

y

```

---

## Example

Let

```

x

```

= Number of chairs manufactured

```

y

```

= Number of tables manufactured

---

# 3. Objective Function

## Definition

The function that is to be maximized or minimized.

General form

```

Z = ax + by

```

where

- **a**, **b** are constants.

---

## Examples

### Maximization

```

Maximize

Z = 5x + 4y

```

---

### Minimization

```

Minimize

Z = 2x + 7y

```

---

# 4. Constraints

## Definition

The restrictions imposed on the decision variables.

General form

```

ax + by ≤ c

```

or

```

ax + by ≥ c

```

or

```

ax + by = c

```

---

## Examples

```

2x + y ≤ 20

```

```

x + 3y ≤ 30

```

---

# 5. Non-Negativity Restrictions

Decision variables cannot be negative.

Hence,

```

x ≥ 0

y ≥ 0

```

---

# 6. Feasible Solution

## Definition

A solution satisfying **all** the constraints and non-negativity restrictions.

---

## Example

If

```

x=2

y=3

```

satisfy every inequality,

then

```

(2,3)

```

is a feasible solution.

---

# 7. Feasible Region

## Definition

The common region satisfying all constraints simultaneously is called the **feasible region**.

---

## Characteristics

- May be bounded.
- May be unbounded.
- May consist of a single point.
- May be empty.

---

# 8. Convex Set

## Definition

A set is called **convex** if the line segment joining any two points in the set lies completely inside the set.

---

## Illustration

```

●────────●

Entire line inside region

```

---

# 9. Convex Polygon

The feasible region obtained in graphical LPP is generally a convex polygon.

Its corner points are called **vertices**.

---

# 10. Corner Point Theorem

## Statement

If an optimal solution exists, it occurs at one of the corner points (vertices) of the feasible region.

---

## Procedure

1. Find all vertices.
2. Evaluate the objective function at each vertex.
3. Choose the largest (or smallest) value.

---

# 11. Bounded and Unbounded Regions

---

## Bounded Region

A closed region having finite area.

Example

```

□

```

---

## Unbounded Region

A region extending indefinitely.

Example

```

↗

```

---

# 12. Graphical Method of Solving LPP

## Step 1

Identify decision variables.

---

## Step 2

Write the objective function.

---

## Step 3

Write all constraints.

---

## Step 4

Plot each constraint as an equation.

---

## Step 5

Identify the feasible region.

---

## Step 6

Find all corner points.

---

## Step 7

Evaluate the objective function at every corner point.

---

## Step 8

Select the maximum or minimum value.

---

# 13. Multiple Optimal Solutions

If the objective function is parallel to one side of the feasible region,

then every point on that side gives the same optimal value.

---

# 14. Infeasible Region

If no common region satisfies all constraints,

then the LPP has **no feasible solution**.

---

# 15. Applications of Linear Programming

Linear Programming is used in:

- Production planning
- Transportation
- Inventory management
- Scheduling
- Advertising
- Agriculture
- Diet planning
- Finance
- Resource allocation
- Manufacturing

---

# 16. Important Observations

- Objective function must be linear.
- Constraints must be linear.
- Decision variables are non-negative.
- The feasible region is always convex.
- The optimal solution occurs at a corner point.

---

# Comparison Tables

## Objective Function vs Constraints

| Objective Function | Constraints |
|--------------------|-------------|
| To be optimized | Restrictions |
| Single equation | One or more inequalities/equations |

---

## Feasible Solution vs Optimal Solution

| Feasible Solution | Optimal Solution |
|-------------------|------------------|
| Satisfies all constraints | Gives the maximum or minimum objective value |
| May not be the best | Best feasible solution |

---

## Bounded vs Unbounded Region

| Bounded | Unbounded |
|----------|-----------|
| Finite area | Infinite extent |
| Closed region | Open in one or more directions |

---

## Maximization vs Minimization

| Maximization | Minimization |
|--------------|--------------|
| Largest value of Z | Smallest value of Z |
| Profit-oriented | Cost-oriented |

---

# ASCII Diagrams

## Feasible Region

```

──────────

\ /

\______/

Feasible Region

```

---

## Convex Set

```

●────────●

Entire line lies inside

```

---

## Corner Points

```

●────●

│ │

●────●

Vertices

```

---

## Graphical Method

```

Constraints

↓

Feasible Region

↓

Corner Points

↓

Objective Function

↓

Optimal Solution

```

---

# Solved Examples

### Example 1

Maximize

```

Z = 3x + 2y

```

subject to

```

x ≥ 0

y ≥ 0

```

**Solution**

Without additional constraints, the feasible region is **unbounded**.

Hence, no finite maximum exists.

---

### Example 2

State the objective function in the following problem:

Profit from product A is ₹50 and from product B is ₹80.

**Solution**

Let

```

x

```

= Number of product A

```

y

```

= Number of product B

Objective function

```

Maximize

Z = 50x + 80y

```

---

### Example 3

Determine whether the point

```

(2,3)

```

satisfies

```

x + y ≤ 6

x ≥ 0

y ≥ 0

```

**Solution**

```

2 + 3 = 5 ≤ 6

```

Also,

```

2 ≥ 0

3 ≥ 0

```

Therefore,

```

(2,3)

```

is a feasible solution.

---

### Example 4

Identify whether the set

```

x ≥ 0

y ≥ 0

```

is bounded.

**Solution**

The region extends infinitely in the first quadrant.

Hence,

the region is **unbounded**.

---

### Example 5

A feasible region has corner points

```

(0,0)

(4,0)

(4,3)

(0,5)

```

Find the maximum value of

```

Z = 2x + y

```

**Solution**

Evaluate the objective function at each corner point.

| Point | Z = 2x + y |
|------|------------:|
| (0,0) | 0 |
| (4,0) | 8 |
| (4,3) | 11 |
| (0,5) | 5 |

Maximum value

```

Z = 11

```

at

```

(4,3)

```

---

### Example 6

State the non-negativity restrictions if the decision variables are

```

x

and

y

```

**Solution**

The restrictions are

```

x ≥ 0

y ≥ 0

```

---

# Common Mistakes

- Writing a **non-linear** objective function or non-linear constraints; all equations and inequalities in an LPP must be linear.
- Forgetting the **non-negativity restrictions** (**x ≥ 0**, **y ≥ 0**).
- Shading the wrong side of a constraint while drawing the feasible region.
- Assuming every feasible solution is an optimal solution.
- Failing to evaluate the objective function at **all** corner points of the feasible region.
- Ignoring the possibility of **multiple optimal solutions**, **unbounded solutions**, or **no feasible solution**.
- Making arithmetic errors while calculating the coordinates of intersection points.
- Selecting a point outside the feasible region as the final answer.

---

# Chapter Summary

- A **Linear Programming Problem (LPP)** aims to maximize or minimize a **linear objective function** subject to a set of **linear constraints**.
- The main components of an LPP are **decision variables**, **objective function**, **constraints**, and **non-negativity restrictions**.
- A **feasible solution** satisfies all constraints, while the **feasible region** is the common region satisfying every constraint simultaneously.
- The feasible region obtained graphically is a **convex set**, usually in the form of a **convex polygon**.
- According to the **Corner Point Theorem**, if an optimal solution exists, it occurs at one of the vertices of the feasible region.
- LPPs may have **unique**, **multiple**, **unbounded**, or **no feasible** optimal solutions depending on the constraints.
- The graphical method provides a systematic procedure for solving two-variable linear programming problems.
- Linear Programming has extensive applications in production planning, transportation, finance, business, engineering, agriculture, and resource optimization.







# CBSE Class 12 Mathematics

