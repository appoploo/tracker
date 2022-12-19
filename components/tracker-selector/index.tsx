import clsx from "clsx";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useTrackers } from "../../lib/tracker";
import tracker from "../../pages/api/tracker";

export function TrackerSelector() {
  const router = useRouter();
  const { data: trackers } = useTrackers();
  const q = router.query;
  const ref = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const push = (obj: Record<string, any>) => {
    router.push({
      query: {
        ...q,
        ...obj,
      },
    });
  };

  return (
    <div
      className={clsx(" h-2  md:grid md:h-6 ", {
        "xl:grid-cols-2 gap-2": q.IMEI,
      })}
    >
      <select
        value={q.IMEI}
        ref={ref}
        onChange={(evt) => {
          const IMEI =
            +evt.currentTarget.value === -1 ? null : evt.currentTarget.value;

          push({
            IMEI,
            days: IMEI ? q.days : null,
          });
        }}
        className={clsx(
          "select  focus:outline-none rounded-sm bg-base-100  select-sm  w-2/3  md:w-full text-xs 2xl:w-11/12 2xl:text-sm ml-auto"
        )}
      >
        <option>
          {/* <div className=" w-6 h-4  bg-gray-500 rounded-lg mr-1">
              {ref?.current ? ref.current.options.length - 1 : null}
            </div> */}
          All Vehicles
        </option>

        <option value={1}>Alex</option>
        <option value={2}>Posidon </option>
        <option value={3}>Speeder</option>

        {trackers.map((t) => (
          <option key={t.IMEI} value={t.IMEI}>
            Device: {t.name ?? t.IMEI}
          </option>
        ))}
      </select>
      <select
        value={q.days}
        onChange={(evt) => {
          push({
            days: evt.currentTarget.value,
          });
        }}
        className={clsx(
          "select focus:outline-none bg-base-100 rounded-sm  select-sm  w-2/3 md:w-full text-xs   2xl:w-11/12 2xl:text-sm",
          {
            hidden: !q.IMEI,
          }
        )}
      >
        <option disabled selected>
          show days from last n days
        </option>
        <option value={1}>Last 1 day </option>
        <option value={2}>Last 2 days </option>
        <option value={3}>Last 3 days </option>
        <option value={7}>Last 1 week </option>
        <option value={14}>Last 2 weeks </option>
        <option value={21}>Last 3 weeks </option>
        <option value={30}>Last 1 month </option>
        <option value={60}>Last 2 months </option>
        <option value={90}>Last 3 months </option>
      </select>
    </div>
  );
}