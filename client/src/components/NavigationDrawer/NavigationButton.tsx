import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

interface NavigationButtonProps {
  path: string;
  text: string;
  handleClick(): void;
}

const NavigationButton = ({
  path,
  text,
  handleClick,
}: NavigationButtonProps) => (
  <Button
    as={RouterLink}
    to={path}
    variant="ghost"
    isFullWidth
    rightIcon={<FaAngleRight />}
    onClick={handleClick}
    justifyContent="space-between"
  >
    {text}
  </Button>
);

export default NavigationButton;
