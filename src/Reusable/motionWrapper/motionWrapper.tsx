import { motion } from "framer-motion";
// interface motionProps {
//   children: any;
// }
const MotionWrapper = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
export default MotionWrapper;
