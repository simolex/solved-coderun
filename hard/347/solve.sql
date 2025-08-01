WITH
    cte AS (
        SELECT
            g.*,
            g.id AS child_id
        FROM
            genre AS g
        UNION ALL
        SELECT
            i.*,
            c.child_id
        FROM
            genre i
            JOIN cte AS c ON c.parent_genre_id = i.id
    )
SELECT DISTINCT
    t.id AS track_id,
    g.id AS genre_id,
    t.name AS track_name,
    g.name AS genre_name
FROM
    cte AS g
    JOIN track_genre AS tg ON tg.genre_id = g.child_id
    JOIN track AS t ON t.id = tg.track_id
ORDER BY
    t.id,
    g.id