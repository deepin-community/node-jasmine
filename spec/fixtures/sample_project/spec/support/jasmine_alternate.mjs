const config = {
    "spec_dir": "spec",
    "spec_files": [
        "fixture_spec.js",
        "**/*spec.js"
    ],
    "helpers": [
        "helper.js"
    ],
    "requires": [
        "ts-node/register"
    ]
};

export default config;
