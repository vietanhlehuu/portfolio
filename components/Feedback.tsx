import { ArrowRightIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import Section from "./Section";

const Feedback: React.FC = () => {
  const [state, setState] = useState<
    "pending" | "submit" | "success" | "error"
  >("pending");

  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, message } = e.target as typeof e.target & {
      name: { value: string };
      message: { value: string };
    };
    if (!window.Pageclip) {
      return;
    }
    setState("submit");

    window.Pageclip.send(
      "AXgiDVy9PvCHGhETXCPi1o5psKfZODK5",
      "contact-form",
      {
        name: name.value,
        message: message.value,
      },
      function (error: any, response: any) {
        if (error) {
          setState("error");
          return;
        }
        setState("success");
      }
    );
  };
  return (
    <Section>
      <div className="p-6">
        <h2 className="text-4xl text-center font-title">Feedbacks</h2>
        <p className="mt-6 text-xl text-center">
          Đôi lời khen chê, đôi lời nhắn gửi
        </p>
        <div>
          <div
            className={clsx(
              "border-4 border-black bg-letter [background-size:40px_40px] animate-letter p-4 mt-6",
              {
                "!bg-letter-success": state == "success",
                "!bg-letter-error": state == "error",
              }
            )}
          >
            <div className="p-4 bg-white border-4 border-black">
              {(state == "pending" || state == "submit") && (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <p className="text-base">Người gửi</p>
                  <input
                    name="name"
                    className="p-2 mt-2 border border-black"
                    defaultValue="Ẩn danh"
                    required
                  />
                  <p className="mt-6 text-base">Nội dung</p>
                  <textarea
                    name="message"
                    className="w-full min-h-[150px] p-2 mt-2 border border-black"
                    placeholder="Cho mình hỏi Việt Anh biết cài Win không?"
                    required
                  />
                  <button
                    disabled={state == "submit"}
                    className="flex mt-6 ml-auto btn"
                  >
                    <div className="flex items-center px-4 py-2">
                      {state == "submit" ? (
                        <span>Đang gửi nè...</span>
                      ) : (
                        <>
                          <span>Gửi</span>
                          <span className="w-[24px] ml-4">
                            <ArrowRightIcon />
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              )}
              {state == "success" && (
                <p className="text-center">
                  Lời nhắn của bạn đã được gửi, cám ơn ạ!
                </p>
              )}
              {state == "error" && (
                <p className="text-center">
                  Úi, bị lỗi gì đó, báo ngay cho mình biết với ạ.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
