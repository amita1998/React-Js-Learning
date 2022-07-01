import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { userData } from "../data/userData";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Work Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      render: (gender, data) => {
        return (
          <>
            {gender === "Male" ? (
              <Tag color="blue">{gender}</Tag>
            ) : (
              <Tag color="magenta">{gender}</Tag>
            )}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (props.users) setUsers(props.users);
  }, [props.users]);

  return (
    <div style={{ padding: "1rem" }}>
      <Table columns={columns} dataSource={userData} />
    </div>
  );
};

export default Users;
