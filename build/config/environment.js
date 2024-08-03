"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    db: process.env.DB,
    jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjgOKT5K/QoXuAkPEisf1
7sMjCiwIpGbLp4fyhHRzMdRURuDPLdN1qM7AtrDz6K7KyUK0Q1Llm7H6ERnlwueE
/7OWwuNqVvipsI20FCnRGMxxqiooHgIDB+bbw6PH+hR8D+D0CRAXcVcrTbgq9C95
rbma6fc+/ozbGlmlpUf2WwVclw5gkC4vzrpiRekUntJpryBuzFZmisKQVEG6emHW
aTWDRxjOWG1uSJ3yqLD5g5eaUUo4bcKmClMqpOFNeiQONotcmrEN3awknixbM++S
4CNnqSs4BXc2XYjy8/1noTatnMwuD5Oz8mAxEj0HvTWEK6PBd1y0MKadoHLW9wiL
GQIDAQAB
-----END PUBLIC KEY-----`,
    jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAjgOKT5K/QoXuAkPEisf17sMjCiwIpGbLp4fyhHRzMdRURuDP
LdN1qM7AtrDz6K7KyUK0Q1Llm7H6ERnlwueE/7OWwuNqVvipsI20FCnRGMxxqioo
HgIDB+bbw6PH+hR8D+D0CRAXcVcrTbgq9C95rbma6fc+/ozbGlmlpUf2WwVclw5g
kC4vzrpiRekUntJpryBuzFZmisKQVEG6emHWaTWDRxjOWG1uSJ3yqLD5g5eaUUo4
bcKmClMqpOFNeiQONotcmrEN3awknixbM++S4CNnqSs4BXc2XYjy8/1noTatnMwu
D5Oz8mAxEj0HvTWEK6PBd1y0MKadoHLW9wiLGQIDAQABAoIBADJwhXZ/y5ioEwIQ
6cTVAr+b5V0eiK9Dp3/IZFWxOpzvKkPGYy+GlJqxXHdG4Eq7kmDrZTUoQ08KZqQe
S6HvMyjSs3Bi74kWZsbDfbtPoumo65IhyP/nfQYYc+PHzyY+klXdcy+o3HqwGDxR
dkgmeJRAgQoqe+BTTRrNzmym45QuCa01N8I51bYdJ14gP1LOUi79ikzoMsYrD+fP
9bFtilZwPq7z8RB35P09lGNoqJC/Rlkh1qQFDxii3FA2tbSujxHppUObWfb7HTi0
BfnKuddEvfeZKwDMPsCLbL2TodiWZ1jLdSSRtdCLQw/wYE9MOztwybS+9uCJzAn6
9ZP0OdECgYEA2fZk4NYnzUVTMOJZMFsfXQY2raw49YND5LMCED5fMPdn9s7nUOKp
M1Cv4lQfYbFjQYmQaUIc086OQNnDt3p22pGsOmfC/L9vvRRQwwe940ZCHYi+EXiz
ll95I098lP4XPBAYKT74YfczyvI+9OT4g7w/sp1cFXQzixtEcZmLYrUCgYEApswY
I5SohJCm+dXE87R81FuUDg/5uTzsv5e0NHxbYWwZfQmDhhmU94yjbLEHOk0CexyE
qJSETFB9Z6ocQY1LbrKwLmdn0bjbDyC0EjryFrI78X19Y1M4UYj/T5113TnQfWGa
sO7Xfzla7Lof1a1wbvUapRbQWqRg5beHrrNf0VUCgYEAhveiQ++Yue2BtDWVUPI8
G5hrZ2PL6YudERMf5fsZavLot9YrOtUAPTxrjVTWEeKMOdr7R5Ke0zGGuPWf0g/N
ZU7rPUdfYK8SfB0GXZ5/oSqyaiNwvtTlL+py0sC3vnMQ5Cp7K59IozE2KyeSgIcA
tGJvdyUmDkrkV/FMkqOnwjkCgYBbu4VPFDP17EQYxOtziIDanZ74eOrDaHFgEYPH
Fdl/497EuJXAC5O07YD3hwjNlIrXwGBpAn0cJ2xAtfqiRp4EvHtOmgor+jlnwXmn
SQnZV57F+lkaZitkFC8tzxCCYYh7XFGiG0kjLB0IcniNoLxkGaLUxo5CO4Ma82vI
tdftnQKBgQCU3vLGl8/1tgQWiFYWjd/mEuZ1NIhIZgT/ov70cbKu8Srdg8lBwITD
4zC2tqcuwDeJi1A0JQNV3Pzj0thLx4ra/OX+YTS6X3+anA3jmCQW58rkjW0jhOOx
xWKAPPXanWv1egSMZed67s5AnzJoS8983qrWA1thyVA/RKRrYgvr5Q==
-----END RSA PRIVATE KEY-----`,
};
exports.default = config;
//# sourceMappingURL=environment.js.map