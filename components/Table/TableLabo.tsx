"use client"

import CancelIcon from "@mui/icons-material/Close"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import Box from "@mui/material/Box"
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
} from "@mui/x-data-grid"
import { randomId } from "@mui/x-data-grid-generator"
import * as React from "react"
import { useLabos } from "@app/hook/useLabos"
import { Labo } from "@app/type/interface"

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState<Labo[]>([])
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({})

  const { getAllLabos, Labo, updateLabo, deleteLabo } = useLabos()

  React.useEffect(() => {
    getAllLabos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    const defineRows: GridRowsProp = Labo.data?.map((labo) => ({
      id: randomId(),
      _id: labo._id,
      codeNo: labo.codeNo,
      fullName: labo.fullName,
      clinic: labo.clinic,
      validTo: labo.validTo,
      laboName: labo.laboName,
      quantity: labo.quantity,
      position: labo.position,
      restorationType: labo.restorationType,
      origin: labo.origin,
      toothColor: labo.toothColor,
    }))
    setRows(defineRows as Labo[])
  }, [Labo])

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id: GridRowId, _id: string) => () => {
    deleteLabo(_id)
    setRows(rows.filter((row) => row.id !== id))
  }

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })

    const editedRow = rows.find((row) => row.id === id)
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow: Labo = { ...newRow, isNew: false } as Labo
    updateLabo(newRow._id, {
      codeNo: newRow.codeNo,
      fullName: newRow.fullName,
      clinic: newRow.clinic,
      validTo: newRow.validTo,
      laboName: newRow.laboName,
      quantity: newRow.quantity.toString(),
      position: newRow.position,
      restorationType: newRow.restorationType,
      origin: newRow.origin,
      toothColor: newRow.toothColor,
    })
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel)
  }

  const columns: GridColDef[] = [
    {
      field: "codeNo",
      headerName: "Code No",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 80,
      type: "string",
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Họ và tên",
      headerClassName: "bg-white dark:bg-neutral-500",
      type: "string",
      width: 280,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "clinic",
      headerName: "Phòng khám",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "validTo",
      headerName: "Có hiệu lực đến",
      type: "date",
      valueGetter: (value) => value && new Date(value),
      valueFormatter: (value) =>
        value
          ? (value as Date).toLocaleString("vi-VN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : "",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      editable: true,
    },
    {
      field: "laboName",
      headerName: "Tên labo",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "position",
      headerName: "Vị trí",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "restorationType",
      headerName: "Loại phục hình",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "origin",
      headerName: "Xuất xứ",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "toothColor",
      headerName: "Màu răng",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 180,
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerClassName: "bg-white dark:bg-neutral-500",
      width: 100,
      cellClassName: "actions",
      getActions: (prams) => {
        const isInEditMode = rowModesModel[prams.id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={1}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(prams.id)}
            />,
            <GridActionsCellItem
              key={2}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(prams.id)}
              color="inherit"
            />,
          ]
        }

        return [
          <GridActionsCellItem
            key={1}
            icon={<EditIcon className="dark:text-white" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(prams.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={2}
            icon={<DeleteIcon className="dark:text-white" />}
            label="Delete"
            onClick={handleDeleteClick(prams.id, prams.row._id)}
            color="inherit"
          />,
        ]
      },
    },
  ]

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        className="bg-white dark:bg-neutral-500 dark:text-white"
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.id}
      />
    </Box>
  )
}
