export function matches(species, query = '', group = '', environment = '') {
 const normalized = query.normalize('NFKC').trim().toLocaleLowerCase();
 return species.filter(s => (!group || s.group === group) && (!environment || s.environment === environment) &&
 [s.name,s.scientific,s.habitat,s.range,s.group,s.environment,s.taxon].join(' ').normalize('NFKC').toLocaleLowerCase().includes(normalized));
}
