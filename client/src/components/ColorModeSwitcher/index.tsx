
import * as React from 'react'
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;
const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  return (
    <IconButton
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

export default ColorModeSwitcher;