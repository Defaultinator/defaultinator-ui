import OldJoyride from "react-joyride";
import JoyrideTooltip from "./JoyrideTooltip";
import JoyrideBeacon from "./JoyrideBeacon";

const MyJoyride = ({ steps, ...props }) => {
  //return(<div>swag</div>);
  return (
    <OldJoyride
      steps={steps}
      continuous
      showProgress
      tooltipComponent={JoyrideTooltip}
      beaconComponent={JoyrideBeacon}
      floaterProps={{
        hideArrow: true,
        styles: {
          wrapper: {
            zIndex: 1201
          },
        },
      }}
      styles={{
        options: {
          zIndex: 1201,
        }
      }}
      {...props}
    />
  );
};

export default MyJoyride;