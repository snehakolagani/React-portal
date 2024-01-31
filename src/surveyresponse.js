
import Header from "./header";
import CommonDataFile from "./commondatafile";

export default function SurveyResponse() {
  console.log("survey form calling")
  return (
    <>
     <div>
      <Header name="Survey Response" />
      <CommonDataFile reportId="4" />
      </div>
    </>
  );
}
