"use client";
import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "../Input/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Button from "../Button/Button";

export const TableCom = ({
  data = [],
  columns = [],
  isLoading,
  actionValue,
  handleActionClick,
  loadingAction,
  actionModel
}) => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredData = React.useMemo(() => {
    return data?.filter((row) => {
      return Object.values(row).some(
        (value) =>
          (typeof value === "string" &&
            value.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (typeof value === "number" && value.toString().includes(searchQuery))
      );
    });
  }, [data, searchQuery]);

  const paginatedData = React.useMemo(() => {
    const start = page * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, page, pageSize]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const table = useReactTable({
    data: paginatedData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      page,
      pageSize,
    },
  });

  React.useEffect(() => {
    // Reset to first page when search query changes
    setPage(0);
  }, [searchQuery]);

  return (
    <div className="w-full md:mt-0 mt-6">
      <div className="flex items-center outline-none space-x-4 py-4">
        <Input
          placeholder="Search..."
          value={searchQuery}
          className="outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {actionModel}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="whitespace-nowrap">
                    <div className="flex items-center justify-between">
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanSort() && (
                            <div
                              className={`cursor-pointer select-none ${
                                header.column.getIsSorted()
                                  ? "text-blue-500"
                                  : "text-gray-500"
                              }`}
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              <CaretSortIcon />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </TableHead>
                ))}
                {actionValue && (
                  <TableHead className="whitespace-nowrap">Action</TableHead>
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  {actionValue && (
                    <TableCell>
                      <Button
                        loading={loadingAction}
                        disabled={loadingAction}
                        id={row?.id}
                        onClick={() => handleActionClick(row)}
                        variant={actionValue?.variant}
                      >
                        {actionValue?.actionValue}
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-between py-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(0);
              table.setPageSize(Number(e.target.value));
            }}
            className="border rounded-md px-2 py-1 bg-white text-black"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span>rows per page</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </Button>
          <span>
            Page {page + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page + 1)}
            disabled={(page + 1) * pageSize >= filteredData.length}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
