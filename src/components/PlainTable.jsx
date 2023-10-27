import React from "react";
import { useTable } from "react-table";
import Spinner from "./common/LoadingSpinner";
import Stack from "./common/Stack";

const PlainTable = (props) => {
  const hasClickableRow = !!props.onRowClick;
  const {
    columns,
    data,
    isLoading = false,
    sx = {},
    onRowClick = () => {},
  } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="mt-2 mb-5 flex flex-col overflow-x-auto flex-grow" style={sx}>
      <div className="-my-2">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="overflow-hidden border-gray-200">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className={""}>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        scope="col"
                        className="px-6 py-3 text-left text-xs uppercase tracking-wider font-bold"
                        style={{ color: 'var(--secondary-light-text-color)'}}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="divide-y divide-gray-200"
              >
                {rows?.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      onClick={() => onRowClick(data[index])}
                      className={hasClickableRow ? "clickable-row" : ""}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {data.length === 0 ? (
              <div className="no-table-data">
                {isLoading ? (
                  <Spinner size={20} color="primary" />
                ) : (
                  <>
                    <Stack
                      className="p-2 items-center justify-center"
                      sx={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#eee",
                        border: "1px solid #eaeaea",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={""}
                        // src={require("../../assets/woman.svg").default}
                        alt="no-item"
                      />
                    </Stack>

                    <span
                      className="my-2.5 text-center"
                      style={{
                        maxWidth: "300px",
                      }}
                    >
                      No data here
                    </span>
                  </>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainTable;
