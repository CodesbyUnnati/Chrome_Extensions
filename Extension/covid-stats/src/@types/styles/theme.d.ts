import 'styled-components';
import { theme } from 'styles';

type Theme = typeof theme;
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
        // Type Inference in action
    }
}
