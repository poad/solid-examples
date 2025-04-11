import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';
import { pluginEslint } from "@rsbuild/plugin-eslint";

export default {
    plugins: [
        pluginBabel({
            include: /\.(?:jsx|tsx)$/,
        }),
        pluginSolid(),
        pluginEslint({
            enable: false,
        }),
    ],
};
