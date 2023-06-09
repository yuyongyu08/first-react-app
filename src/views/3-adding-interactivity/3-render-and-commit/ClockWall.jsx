import Clock from "./Clock";

const timeZones = ["America/Los_Angeles", "Asia/Tokyo", "Asia/Shanghai"];

export default function ClockWall() {
  return (
    <div>
      {timeZones.map((timeZone) => {
        return <Clock timeZone={timeZone} />;
      })}
    </div>
  );
}
