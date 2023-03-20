# Write your MySQL query statement below

SELECT C.name as Customers from Customers C
WHERE C.id NOT IN (SELECT O.CustomerId from Orders O)
