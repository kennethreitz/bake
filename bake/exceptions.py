class NoBakefileFound(RuntimeError):
    pass


class TaskNotInBashfile(ValueError):
    pass


class FilterNotAvailable(ValueError):
    pass
