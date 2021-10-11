import { Meta } from '@storybook/react';
import Signature from "./Signature";

export default {
  title: "components/Signature",
  component: Signature,
} as Meta;

export const MySignature = () => {
  return <Signature first_name="Wonjun" last_name="Jang" occupation="Frontend Developer" description={["Hello", "World"]}/>
}

