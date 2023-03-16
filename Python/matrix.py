def funcMatrix(matrix):
    num_rows = len(matrix)
    num_cols = len(matrix[0])

    # Initialize the list to hold the largest elements in each row
    largest_in_row = [None] * num_rows

    # Find the largest element in each row
    for i in range(num_rows):
        largest_in_row[i] = max(matrix[i])

    # Initialize the list to hold the smallest elements in each column
    smallest_in_col = [None] * num_cols

    # Find the smallest element in each column
    for j in range(num_cols):
        column = [matrix[i][j] for i in range(num_rows)]
        smallest_in_col[j] = min(column)

    # Find the intersection of the two sets
    intersection = set(largest_in_row).intersection(set(smallest_in_col))

    # Find the largest element in the intersection
    result = -1
    for num in intersection:
        if num is not None and num > result:
            result = num

    return result

def main():
    #input for matrix
    matrix = []
    matrix_rows, matrix_cols = map(int, input().split())
    for idx in range(matrix_rows):
        matrix.append(list(map(int, input().split())))

    result = funcMatrix(matrix)
    print(result)


if __name__ == "__main__":
    main()
