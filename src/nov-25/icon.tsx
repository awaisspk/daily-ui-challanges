import { motion } from "framer-motion";

type Props = {
  open: boolean;
};

export const DropdownIcon = ({open}: Props) => {
  return (
    <>
      <motion.svg
        width="25"
        height="25"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{rotate : 180}}
        animate={{rotate : open ? 0 : 180 }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.38128 18.1187C6.03957 17.777 6.03957 17.223 6.38128 16.8813L13.3813 9.88128C13.723 9.53957 14.277 9.53957 14.6187 9.88128L21.6187 16.8813C21.9604 17.223 21.9604 17.777 21.6187 18.1187C21.277 18.4604 20.723 18.4604 20.3813 18.1187L14 11.7374L7.61872 18.1187C7.27701 18.4604 6.72299 18.4604 6.38128 18.1187Z"
          fill="#0F1730"
        />
      </motion.svg>
    </>
  );
};
