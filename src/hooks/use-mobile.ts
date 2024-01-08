import { useMediaQuery } from '@chakra-ui/react';

export default function useMobile() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return !isLargerThan768;
}
