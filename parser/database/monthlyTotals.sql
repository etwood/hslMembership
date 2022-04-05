SELECT
    Year(qryMembershipPayPalAndCash ! [﻿Date]) & "-" & Right(
        "00" & Month((qryMembershipPayPalAndCash ! [﻿Date])),
        2
    ) AS M,
    Year(qryMembershipPayPalAndCash ! [﻿Date]) & "-" & MonthName(
        Month(CVDate(qryMembershipPayPalAndCash ! [﻿Date]))
    ) AS [Month],
    Sum(IIf([Gross] = 25, [gross], 0)) AS [$25 Membership],
    Sum(IIf([Gross] = 50, [gross], 0)) AS [$50 Membership],
    Sum(IIf([Gross] = 100, [gross], 0)) AS [$100 Membership],
    Sum((IIf([gross] <= 100, [gross], 0))) AS Total,
    Sum(IIf([Gross] = 25, 1, 0)) AS [$25 Members],
    Sum(IIf([Gross] = 50, 1, 0)) AS [$50 Members],
    Sum(IIf([Gross] = 100, 1, 0)) AS [$100 Members],
    Count(qryMembershipPayPalAndCash.Gross) AS [Count]
FROM
    qryMembershipPayPalAndCash
GROUP BY
    Year(qryMembershipPayPalAndCash ! [﻿Date]) & "-" & Right(
        "00" & Month((qryMembershipPayPalAndCash ! [﻿Date])),
        2
    ),
    Year(qryMembershipPayPalAndCash ! [﻿Date]) & "-" & MonthName(
        Month(CVDate(qryMembershipPayPalAndCash ! [﻿Date]))
    )
ORDER BY
    Year(qryMembershipPayPalAndCash ! [﻿Date]) & "-" & Right(
        "00" & Month((qryMembershipPayPalAndCash ! [﻿Date])),
        2
    );