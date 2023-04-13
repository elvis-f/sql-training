export const selectCount = (table: string): string => {
  return `SELECT COUNT(*) as c FROM ${table};`;
};

export const selectRowById = (id: number, table: string): string => {
  return `SELECT * FROM ${table} WHERE id = ${id};`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT * FROM categories WHERE title = '${title}';`
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT apps.title as app_title, category_id, categories.title as category_title
    FROM apps_categories
    JOIN apps
    ON apps_categories.app_id = apps.id
    JOIN categories
    ON apps_categories.category_id = categories.id
    WHERE app_id = ${appId};`
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `SELECT COUNT(DISTINCT ${columnName}) as c FROM ${tableName};`
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `SELECT * FROM reviews WHERE app_id = ${appId} AND author = '${author}';`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `SELECT ${columnName} FROM ${tableName};`
};

