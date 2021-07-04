import React from "react";
import AdminLogin from "./AdminLogin";
import QuestionsForm from "./QuestionsForm";
import { useAdmin } from "../../Store";
const Admin = () => {
  const admin = useAdmin();
  return <div>{admin.name ? <QuestionsForm /> : <AdminLogin />}</div>;
};

export default Admin;
