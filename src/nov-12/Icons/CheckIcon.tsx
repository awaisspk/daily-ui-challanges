import {motion} from 'framer-motion';

export const CheckIcon = () => {
  return (
    <motion.svg
      width="15"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1.58331 5.99999L6.16665 10.5833L15.3333 1.41666"
        stroke="#fffeff"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{pathLength: 0}}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.svg>
  );
};
