-- # Write your MySQL query statement below

-- SELECT P.firstName, P.lastName, A.city, A.state
-- FROM Person P LEFT JOIN Address A
-- on P.personId = A.personId

SELECT P.firstName, P.lastName, A.city, A.state
FROM Person P
LEFT JOIN Address A USING (personId)


-- https://leetcode.com/problems/combine-two-tables/description/

-- Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255))
-- Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255))
-- Truncate table Person
-- insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen')
-- insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob')
-- Truncate table Address
-- insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York')
-- insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California')
