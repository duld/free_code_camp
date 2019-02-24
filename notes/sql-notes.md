# SQL Notes

Any and all information relating to SQL that I find useful and important. This includes any articles or courses involving SQL.

## Intro To SQL: Querying and Managing Data

### Creating Tables & Inserting Data

#### Querying Data

Create a new table called 'customers', with multiple columns of different data types.

```SQL
-- Create a new table
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, weight REAL);
```

Insert Data into the customers table

```SQL
-- Inserting data
INSERT INTO customers VALUES (73, "Brian", 33);
```

Querying data stored in the customers table

```SQL
-- lookup all the data stored in the custmers table
SELECT * FROM customers;

-- Filter with condtion
SELECT * FROM customers WHERE age < 21;

-- Filter with multiple conditions
SELECT * FROM customers WHERE age < 21 AND state = "NY";

-- Filter with IN
SELECT * FROM customers WHERE plan IN ("free", "basic");

-- Select Specific Columns
SELECT name, age FROM customers;

-- Order Results
SELECT * FROM customers WHERE age > 21 ORDER BY age DESC;

-- Transform with Case
SELECT name, CASE WHEN age > 18 THEN "adult" ELSE "MINOR" END "type" FROM customers;
```

#### Aggregating Data

```SQL
-- Aggregate functions
SELECT MAX(age) FROM customers;

-- Grouping Data
SELECT gender, COUNT(*) FROM students GROUP BY gender;
```

#### Joining Related Tables

```SQL
-- Inner join
SELECT customers.name, orders.item FROM customers JOIN orders ON customers.id = orders.customer_id;

-- Outer Join
SELECT customers.name, orders.item FROM customers LEFT OUTER JOIN orders ON customers.id = orders.custer_id;
```

#### Updating and Deleting Data

```SQL
-- Updating data
UPDATE customers SET age = 33 WHERE id = 73;

-- Deleting data
DELETE FROM customers WHERE id = 73;
```