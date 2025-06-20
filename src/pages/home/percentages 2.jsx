.percentages-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.percentages-section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6rem;
  margin: 1.5rem 0 1rem 0;
  background: transparent;
}

.percentage-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
}

.percentage-label {
  margin-top: 1rem;
  text-align: center;
  color: var(--color-dark-gray);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-m);
  max-width: 180px;
}

svg {
  display: block;
}

.bg {
  /* Fondo del círculo */
}

.fg {
  transition: stroke-dashoffset 1s;
}

/* Colores específicos por posición */
.percentage-block:nth-child(1) .fg {
  stroke: #dc2626; /* Rojo para pérdidas */
}

.percentage-block:nth-child(2) .fg {
  stroke: #059669; /* Verde para ganancias */
}

.percentage-block:nth-child(3) .fg {
  stroke: #f59e0b; /* Naranja para oportunidad */
}

@media (max-width: 900px) {
  .percentages-section {
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .percentages-section {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  .percentage-block {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .percentages-container {
    align-items: center;
    width: 100%;
  }
}
