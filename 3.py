def pattern(start, end, st):
    if (start < 5):
        if (end < start):
            st += "*";
            return pattern(start, end + 1, st);
        print(st);
        st = "*";
        end = 0;
        return pattern(start + 1, end, st);

pattern(0, 0, "*");