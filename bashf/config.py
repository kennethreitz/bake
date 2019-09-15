import os
import json

import appdirs


class ConfigStore:
    CONFIG_DIR = appdirs.user_config_dir("bashr")
    CONFIG_FILE = os.path.join(CONFIG_DIR, "config.json")
    os.makedirs(CONFIG_DIR, exist_ok=True)

    __data = {"ENVIRON_WHITELIST": []}

    def __repr__(self):
        return f"<ConfigStore path={self.CONFIG_FILE!r}, data={self.data!r}>"

    def __getitem__(self, key):
        return self.get(key)

    def __setitem__(self, key, value):
        return self.set(key, value)

    @property
    def data(self):
        if not self.__data:
            with open(self.CONFIG_FILE, "r") as f:
                self.__data = json.load(f)
        return self.__data

    @data.setter
    def data(self, value):
        self.__data = value
        self.save()

    def save(self):
        with open(self.CONFIG_FILE, "w") as f:
            json.dump(self.data, f)

    def get(self, key, default=None):
        return self.data.get(key, default)

    def set(self, key, value):
        self.data[key] = value


config = ConfigStore()
