import { Modal } from "antd";
import React from "react";

function ProfileIncompleteModal({ open, setOpen, navigate }) {
  return (
    <Modal
      title="Confirmation"
      centered
      className="sharemodal loginer Confirmationseasons"
      width={536}
      visible={open}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <div className="text_line_view data-view">
        <div className="text-center" style={{ padding: "20px 0px" }}>
          <p>
            Your profile is incomplete! Please do fill all the necessary
            information{" "}
          </p>
        </div>
        <div className="text-center top_model_data">
          <button
            type="submit"
            className="button text color_diff"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            className="button text"
            onClick={() => {
              navigate("/Profile", {
                state: { prevPage: "landing" },
              });
            }}
          >
            Go to Profile
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ProfileIncompleteModal;
