import { VStack, Image, Text } from "@chakra-ui/react";

const Terms = () => {
  return (
    <VStack height="100vh">
      <Image src="../images/fooderra_logocrop.png" width="20%" />
      <VStack>
        <Text>Terms and conditions</Text>
        <Text>
          FOODERRA strives to provide information on the "Fooderra"
          Application that is as accurate as possible. However, FOODERRA shall
          not be held liable for any omissions, inaccuracies or deficiencies in
          the information provided, whether caused by itself or by third party
          partners who provide it with such information. FOODERRA, as publisher
          of the "Fooderra" Application, is only bound by an obligation of
          means: its liability can only be engaged if it is shown that it has
          not implemented the means necessary for the execution of the contract.
          The User agrees to use the "Fooderra" Application under his own
          responsibility and at his own risk. The information communicated via
          the "Fooderra" Application by FOODERRA is for information purposes
          only. The User is informed that he is free to follow or not follow the
          advice provided through the "Fooderra" Application and that he may
          not, under any circumstances, seek the responsibility of FOODERRA in
          the event that the implementation of these recommendations does not
          lead to the expected result. FOODERRA cannot be held liable in the
          event of force majeure. Are considered as force majeure, events beyond
          the control of the parties, which they could not reasonably be
          required to foresee and which they could not reasonably avoid or
          overcome insofar as their occurrence makes the performance of the
          obligations totally impossible. Use of the "Fooderra" Application is
          at the User's sole risk. Under no circumstances shall FOODERRA be
          held liable for any direct or indirect damage, including but not
          limited to, infection by viruses, loss of data or programs, loss of
          use of computer equipment (including but not limited to software, hard
          drives, or any system), financial losses (such as but not limited to
          loss of business or loss of opportunity) following the visit to or use
          of the "Fooderra" Application.
        </Text>
      </VStack>
    </VStack>
  );
};
export default Terms;
