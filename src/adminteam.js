
import Header from "./header";
import CommonDataFile from "./commondatafile";

export default function AdminTeam() {
  return (
    <>
    <div>
      <Header name="Admin Team" buttonText="Add User" reportId="6"/>
      <CommonDataFile reportId="6" />
      </div>
    </>
  );
}
