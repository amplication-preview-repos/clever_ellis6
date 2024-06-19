/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VendorWhereUniqueInput } from "../../vendor/base/VendorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VendorCreateNestedManyWithoutBusinessesInput {
  @Field(() => [VendorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VendorWhereUniqueInput],
  })
  connect?: Array<VendorWhereUniqueInput>;
}

export { VendorCreateNestedManyWithoutBusinessesInput as VendorCreateNestedManyWithoutBusinessesInput };
