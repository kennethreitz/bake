COMMA = ","
CONJUNCTION = "and"
SPACE = " "

NEWLINES = ("\n", "\r", "\r\n")
MAX_WIDTHS = []


def tsplit(string, delimiters):
    """Behaves str.split but supports tuples of delimiters."""
    delimiters = tuple(delimiters)
    if len(delimiters) < 1:
        return [string]
    final_delimiter = delimiters[0]
    for i in delimiters[1:]:
        string = string.replace(i, final_delimiter)
    return string.split(final_delimiter)


def eng_join(l, conj=CONJUNCTION, separator=COMMA):
    """Joins lists of words. Oxford comma and all."""

    collector = []
    left = len(l)
    separator = separator + SPACE
    conj = conj + SPACE

    for _l in l[:]:

        left += -1

        collector.append(_l)
        if left == 1:
            if len(l) == 2:
                collector.append(SPACE)
            else:
                collector.append(separator)

            collector.append(conj)

        elif left is not 0:
            collector.append(separator)

    return str().join(collector)
