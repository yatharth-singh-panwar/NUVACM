import { MagicCard } from "./ui/magic-card";
import { Button } from "@/components/Button";
import { Edit2, Trash2 } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Modal } from "./Modal";
import { useState } from "react";

interface EventDetailsProps {
  isAdmin: Boolean;
  eventId?: string;
  Heading: string;
  Description: string;
  formLink?: string;
  qrLink?: string;
  Image?: string;
  events: any;
  setEvents: (e: any) => void;
}
export const EventDetails = (props: EventDetailsProps) => {
  const [model, setModel] = useState(false);
  console.log("Inside Event Details:" + props.eventId);

  async function deleteEvent() {
    try {
      const res = await axios.delete(`${BACKEND_URL}admin/dashboard/Event/`, {
        data: {
          name: props.Heading,
        },
      });

      props.setEvents(
        props.events.filter((e: any) => {
          return e.name !== props.Heading;
        })
      );

      if (res.status === 200) {
        console.log("Event Deleted successfully");
      }
    } catch (e) {
      console.log("Error occured while trying to remove event");
      console.log(e);
    }
  }

  return (
    <>
      {props.isAdmin && (
        <Modal
          open={model}
          isEdit={true}
          eventId={props.eventId}
          onClose={() => {
            setModel(false);
          }}
        />
      )}
      <div className="w-80 font-aleo">
        <MagicCard className="p-5 justify-center">
          <div className="child">
            <img
              className="rounded-lg w-full h-40 object-cover"
              src={
                props.Image
                  ? props.Image
                  : "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
              }
            ></img>
            <div className="m-2 Event Heading text-center w-full font-bold text-2xl">
              {props.Heading}
            </div>
            <div className="max-h-60 text-sm mb-0 text-center text-wrap">
              <p>{props.Description}</p>
              {props.isAdmin && (
                <div>
                  <div>
                    Registration Link:{" "}
                    <a
                      className="text-blue-600 underline"
                      target="_blank"
                      href={props.formLink}
                    >
                      {" "}
                      {props.formLink}
                    </a>
                  </div>
                  <div>
                    QR Link:{" "}
                    <a
                      className="text-blue-600 underline"
                      target="_blank"
                      href={props.qrLink}
                    >
                      {" "}
                      {props.qrLink}
                    </a>
                  </div>
                </div>
              )}
            </div>
            {props.isAdmin && (
              <div className="pt-5 flex gap-4">
                <Button
                  startIcon={<Edit2 size={20} />}
                  variant="tertiary"
                  size="sm"
                  text="Edit Event"
                  onClick={() => setModel(true)}
                ></Button>
                <Button
                  startIcon={<Trash2 size={17} />}
                  variant="secondary"
                  size="sm"
                  text="Delete Event"
                  onClick={deleteEvent}
                ></Button>
              </div>
            )}
            {!props.isAdmin && (
              <div className="pt-5 w-full flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="md"
                  text="Register Now!"
                  onClick={() => {
                    window.open(props.formLink, "_blank");
                  }}
                ></Button>
              </div>
            )}
          </div>
        </MagicCard>
      </div>
    </>
  );
};
