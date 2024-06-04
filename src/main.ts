import {tests} from "./leetcode/index";

for(const item in tests) {
    tests[item].run();
}