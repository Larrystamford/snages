import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";

interface Values {
  company: string;
  role: string;
  dateOpen: string;
  dateClose: string;
  notes: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        company: "",
        role: "",
        dateOpen: "",
        dateClose: "",
        notes: ""
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <TextField
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              name="dateOpen"
              value={values.dateOpen}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              name="dateClose"
              value={values.dateClose}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              name="notes"
              value={values.notes}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Button type="submit">save</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
