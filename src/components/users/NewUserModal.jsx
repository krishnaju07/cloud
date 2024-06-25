import React from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewUserModal = ({ open,formdata, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      website: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      number: Yup.string()
        .required("Number is required.")
        .matches(/^\d{10}$/, "Number must be exactly 10 digits."),
      website: Yup.string()
        .matches(/\./, "Website must contain at least one dot (.)"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values); 
      formdata(values)
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography variant="h6" id="modal-title">
          New User
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            name="number"
            label="Number"
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="website"
            name="website"
            label="Website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={formik.handleReset}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 1 }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formik.isValid}
              sx={{ ml: 1 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default NewUserModal;
