import { globalSetup } from '../src/global-setup';

exports.mochaGlobalSetup = function () {
    console.log('Global setup: This runs once before all tests');
    globalSetup();
};

exports.mochaGlobalTeardown = function () {
    console.log('Global teardown: This runs once after all tests');
};
