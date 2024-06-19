import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VendorTitle } from "../vendor/VendorTitle";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="vendors"
          reference="Vendor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VendorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
